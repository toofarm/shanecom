---
tags:
  - tag: _content/tags/baseball.md
  - tag: _content/tags/react.md
title: Game State
sub_head: Live games and historical data for the baseball obsessive
featured_image: /uploads/compressed/game-state-3.jpg
caption: 'Game State'
project_web_link: "https://gamestate.shanemadethat.com"
project_repo_link: "https://github.com/toofarm/diamond-live"
additional_images: []
highlighted: false
date_created: 2026-06-08T08:00:00.000Z
date_updated: 1970-01-01T00:00:00.000Z
---

Game State began its life as a tool with which to surface data from [my baseball ETL pipeline](https://www.shanemadethat.com/projects/baseball-eval-flow).

The app uses [Supabase](https://supabase.com/) for auth and app data, atop Snowflake and Airflow, which calculate derived metrics on a daily cadence. NextJS forms the presentation layer.

The app offers live game play-by-play, player statistics, and league leaders, all in a package optimized for the aesthetic-minded obsessive.
