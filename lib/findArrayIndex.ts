const findArrayIndex = 
  (
    arr:any[], target:string, param:string
  ):number | null => {
    let start = 0
    let end = arr.length - 1

    const targetDate = new Date(target.split(' ')[0])

    while(start <= end) {
      const mid = Math.floor((start + end) / 2)

      const pivotDate = new Date(arr[mid][param].split(' ')[0])

      if (pivotDate.getTime() === targetDate.getTime()) return mid

      else if (pivotDate.getTime() < targetDate.getTime()) 
        start = mid + 1

      else end = mid - 1
    }

    return null
  }

export default findArrayIndex