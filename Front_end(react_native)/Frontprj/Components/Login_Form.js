import React from "react";
import DocForm from "react-cross-form";
import {TextInput} from "react-native"; // You can use any component you want.

const FORM_FIELDS = [
  {
    key: "firstName",
    label: "First Name",
    placeholder: "Type your name...",
    component: TextInput,
    validators: { presence: { message: "is required" }, length: { minimum: 3 } }
  },
  {
    key: "email",
    label: "Email",
    placeholder: "Type your name...",
    component: TextInput,
    validators: { email: true }
  }
];

export default class Login extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			form: {
				firstName: null,
				email: null
			},
			isValid: false
		};
		this.onChange = this.onChange.bind(this)
	}
	onChange({updateData}){
		this.setState({ form: updateData })
	}
  render() {
    const { form, isFormValid } = this.state;
    return (
      <div>
        <h2>Easy form validation example</h2>
        <form>
        <DocForm
          fields={FORM_FIELDS}
          data={this.state.form}
          onChange={this.onChange}
          validateType="all"
          onValidateStateChanged={({ isValid }) => {
            this.setState({ isFormValid: isValid });
          }}
        />
        </form>
      </div>
    );
  }
};