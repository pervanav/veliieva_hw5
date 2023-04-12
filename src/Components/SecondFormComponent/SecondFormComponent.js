import React from "react";

class SecondFormComponent extends React.Component {
     constructor(props) {
          super(props);

          this.state = {
               number1: 0,
               number2: 0
          }
          
          
          this.handleChangeNumber1 = this.handleChangeNumber1.bind(this);
          this.handleChangeNumber2 = this.handleChangeNumber2.bind(this);

     }

     handleChangeNumber1(e) {
          console.log(e);

          const value = e.target.value;

          this.setState({ number1: +value })

     }

     handleChangeNumber2(e) {
          console.log(e);

          const value = e.target.value;

          this.setState({ number2: +value })

     }

     render() {
          
          console.log(this.state);

          return (
               <form>
                    <p>
                    <label>
                         Number 1
                         <input type="number" value={this.state.number1} onChange={this.handleChangeNumber1} />
                    </label>
                    <p>
                         Number 1 multiplied by 0.5: {this.state.number1 * 0.5}
                    </p>
                    </p>
                    <p>
                    <label>
                         Number 2
                         <input type="number" value={this.state.number2} onChange={this.handleChangeNumber2} />
                    </label>
                    <p>
                         Number 2 multiplied by 0.05: {this.state.number2 * 0.05}
                    </p>
                    </p>
               </form>

          )
     }
}

export default SecondFormComponent;