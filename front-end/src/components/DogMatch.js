import React from 'react'
import DogInfoModal from './DogInfoModal'

class DogMatch extends React.Component {



	render() {
		let displayDogs = this.props.dogs.map((dog, index) => {
			return <li key={index}> {dog[0]}<div><img src={dog[2]} onClick={this.showInfo}/></div> </li>
		})

		return(
      <div className="dogs" >
        Based on your personality results above, here are the top 3 choices of dogs breeds that we've come up with for you:
        <ul>
				  {displayDogs}
        </ul>
			</div>
			)
	}

  showInfo = () => {
    console.log("i am clicking")
    return(<div><DogInfoModal dogs={this.props.dogs}/></div>)
    }

}



export default DogMatch
