---
tags:
  - tag: _content/tags/airflow.md
  - tag: _content/tags/data-engineering.md
  - tag: _content/tags/baseball.md
title: Return to Baseball Eval Flow
sub_head: Fine-tuning, debugging and deploying an ETL pipeline for baseball data analysis
featured_image: /uploads/compressed/tim-gou-rogers-centre.jpg
caption: 'Rogers Centre, Tim Gouw'
additional_images: ''
date_created: 2026-06-08T07:00:00.000Z
date_updated: 1970-01-01T00:00:00.000Z
highlighted: true
---

A couple months ago, [I wrote about Baseball Eval Flow](https://www.shanemadethat.com/projects/baseball-eval-flow) — an ETL project that pulls data from the MLB's public API, uses it to create derived metrics, and makes predictions about player performance based on those metrics. 

I left off in my original post short of launching the app, so I wanted to circle back and share how I closed that final distance. 

## Refactors

### dbt

The biggest difference between my initial draft of Baseball Eval Flow and the finished product was the addition of [dbt](https://docs.getdbt.com/docs/introduction?version=2.0&name=Fusion). 

Prior to refactoring towards dbt, I had used Python to reshape data as it passed through my DAGs. Dbt moves transformation logic out of the DAGs and into the data warehouse. Not only does this hoist the transformation logic, it also moves the computationally expensive process of transformation to the cloud, where compute resources abound. 

### statsapi

In my first iteration of this project, I used the [MLB-StatsAPI](https://pypi.org/project/MLB-StatsAPI/) Python package to wrap my requests for MLB data. As the project progressed, however, I noticed that MLB-StatsAPI omits some values from several MLB payloads; it also fails to cover all of the underlying API's functionality. Rather than try to monkey-patch the StatsAPI library, I elected to ping the MLB API directly.

## Production infrastructure

Deploying my app to a cloud server constituted the most challenging portion of the project by a margin of what felt like leagues. I'd estimate that writing and testing the application code took about 20 hours, whereas deploying it took double that (not to mention some $400 in expenditures).

My deployment difficulties owed somewhat to the inherent challenge of working with cloud platforms, and somewhat to Airflow's unique architecture. Airflow requires several components to run in tandem in order for it to work. It has to run an always-on scheduling server, an API server, a UI, and a Postgres database for storing application metadata. Wiring up these services within a cloud platform is certainly possible but, as I discovered, not easy.

### Attempt 1: Google Cloud Platform

I made my initial attempt to launch the app via Google Cloud Platform. It seemed to me that the service's auto-scaling feature would save some money on a service that only runs for an hour a day.

This effort started out strong, but I quickly ran into issues. I created a [Virtual Private Cloud (VPC)](https://cloud.google.com/vpc), but had difficulty networking my application's components inside the VPC. The further I dug, the more opaque the platform's error messages became. At this point I took a couple days' break from the project, during which a hanging serverless function ran me a $330 compute bill. 

Uneager to see a similar charge show up twice on my credit card, I shut the GCP project down and moved on.

### Attempt 2: Digital Ocean App Platform

Judging by ease of use, Digital Ocean is to my mind clearly superior to both GCP and Amazon Web Services. There's a price to be paid for that ease in terms of cost and lack of access to underlying features, but for a personal project, I figured the tradeoff would be worth it.

I first tried to launch my Airflow project using [App Platform](https://www.digitalocean.com/products/app-platform) — Digital Ocean's platform-as-a-service offering. Once again, Airflow's native complexity broke the box. App Platform works excellently for hosting CRUD applications, but Airflow's multi-service architecture makes it an awkward fit. 

App Platform, it's worth mentioning, is also quite expensive, especially for an application stack that requires 8GB of RAM at a minimum. 

Luckily, Digital Ocean provides another service that fit my project quite well.

### Attempt 3: Digital Ocean VM

Having developed my project in Docker Compose, I decided I could use the same tool to launch the production app. This is where I caveat that you shouldn't do this for a production-grade Airflow project, where fault tolerance and scaling would immediately become problems; however, for my wee, once-daily DAGs, Docker Compose works fine.

I installed my Docker application on a Digital Ocean VM (a "Droplet" in their parlance) and wired up regular metadata backups to an AWS S3 bucket. 

In GitHub, I set up an action that builds an updated Docker image for my project and adds that image to the [Github Container registry](https://docs.github.com/en/packages/working-with-a-github-packages-registry/working-with-the-container-registry) on successful build. I connected the running applications to a free-tier Snowflake data warehouse and started pulling in data.

## Showing off

In order to share some of this data with the outside world, I built a web app that I'm calling [Game State](https://gamestate.shanemadethat.com). Game State provides near-real-time MLB game data, interspersed with some of the derived metrics from my data pipeline.

As times goes on, I'll add more of my "bespoke" metrics to Game State, as well as predictions from my predictions pipeline.

Check out the app, let me know what you think, and stay tuned for updates.