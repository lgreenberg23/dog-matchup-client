import React from 'react'
import { Card } from 'semantic-ui-react'

// const items = [
//   {
//     header: 'Project Report - April',
//     description: 'Leverage agile frameworks to provide a robust synopsis for high level overviews.',
//     meta: 'ROI: 30%',
//   },
//   {
//     header: 'Project Report - May',
//     description: 'Bring to the table win-win survival strategies to ensure proactive domination.',
//     meta: 'ROI: 34%',
//   },
//   {
//     header: 'Project Report - June',
//     description: 'Capitalise on low hanging fruit to identify a ballpark value added activity to beta test.',
//     meta: 'ROI: 27%',
//   },
// ]

class CardExampleGroupProps extends React.Component {

  percentileLabel = (percentile) => {
    let lastDigit = percentile.toString()[percentile.toString().length - 1]
    let label = ''
    switch(lastDigit) {
    case "1":
        label = "st percentile"
        break;
    case "2":
        label = "nd percentile"
        break;
    case "3":
        label = "rd percentile"
        break;
    default:
        label = "th percentile"
    }
  return label
  }


  render() {
    const items = []

    this.props.personInfo.map((trait) => {
      for (let key in trait) {
        items.push({header: key, description: '', meta: `${Math.round(trait[key])}${this.percentileLabel(Math.round(trait[key]))}`})
      }
    })
    return(<Card.Group items={items} />)
  }
}

export default CardExampleGroupProps
