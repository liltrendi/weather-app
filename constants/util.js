export const getMonthInt = date => parseFloat(date.split("-")[1])

export const getFormattedDate = (date, month) => `${date.split("-")[2].split(":")[0]} ${month}, ${date.split("-")[0]}`

export const getDayInt = datetime => {
  const date = datetime.split("-")
  const newDate = new Date(date[0], date[1]-1, date[2])
  const abbr = newDate.toDateString().split(" ")[0]
  switch(abbr){
    case "Mon":
      return 1
    case "Tue":
      return "2"
    case "Wed":
      return 3
    case "Thu":
      return 4
    case "Fri":
      return 5
    case "Sat":
      return 6
    case "Sun":
      return 7
    default:
      return 0
  }
}