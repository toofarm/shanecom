const findArrayIndex = 
  (
    arr:any[], target:any, param: any
  ):number | null => {
    let start = 0
    let end = arr.length - 1

    while(start <= end) {
      const mid = Math.floor((start + end) / 2)

      if (arr[mid][param] === target) return mid

      else if (arr[mid][param] < target) 
        start = mid + 1

      else end = mid - 1
    }

    return null
  }

export default findArrayIndex