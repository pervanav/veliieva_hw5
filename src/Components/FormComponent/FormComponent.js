import React from "react";

class FormComponent extends React.Component {

     constructor(props) {
          super(props);
          this.state = {
               userName: '',
               userAge: 0,
               isMarried: false
          }

          this.handleChange = this.handleChange.bind(this);
          this.handleChangeAge = this.handleChangeAge.bind(this);

     }

     handleChange(e) {
          console.log(e);


          const value = e.target.value;

          this.setState({ userName: value })


     }

     handleChangeAge(e) {

          const value = e.target.value;

          this.setState({ userAge: +value })
      }

     handleChangeisMarried(e) {

          console.log(e);

          const checked = e.target.checked;

          this.setState({ isMarried: checked})

     }

     render() {

          console.log(this.state);

          return (

               <form>
                    <label>
                         <input type="text" value={this.state.userName} onChange={this.handleChange} />
                         <input type="number" value={this.state.userAge} onChange={this.handleChangeAge} />

                         <p>
                              <label>
                                   <input type="checkbox" checked={this.state.isMarried} onChange={this.handleChangeisMarried.bind(this)} />
                              </label>
                         </p>
                    </label>
               </form>
          )
     }
}

export default FormComponent; 