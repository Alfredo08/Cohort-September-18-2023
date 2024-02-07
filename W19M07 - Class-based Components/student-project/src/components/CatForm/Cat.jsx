import { Component } from "react";
import axios from 'axios';

class CatForm extends Component{
    state = {
        numOfCats: 1
    }

    fetchCats = (event) => {
        event.preventDefault();
        axios({url: `https://api.thecatapi.com/v1/images/search?limit=${this.state.numOfCats}`})
            .then(response => {
                const newArrayOfCats = response.data.map(catObject => catObject.url);
                this.props.updateCats(newArrayOfCats);
            });
    }

    render = () => {
        return(
            <form onSubmit={this.fetchCats}>
                <div>
                    <label htmlFor="numOfCats">
                        How many cats you want?
                    </label>
                    <input type="number"
                           id="numOfCats"
                           value={this.state.numOfCats}
                           onChange={(event) => this.setState({numOfCats: event.target.value})}
                           name="numOfCats" />
                </div>
                <button>
                    Get the cats!
                </button>
            </form>
        );
    }
}

export default CatForm;