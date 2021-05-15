import {Field, InjectedFormProps, reduxForm} from "redux-form";
import {DialogsPropsType} from "../DialogsContainer";
import React from "react";
import {Textarea} from "../../common/formControls/FormsControls";
import {maxLengthCreator, required} from "../../../utils/validators";

const maxLength70 = maxLengthCreator(70)
const AddMessageForm: React.FC<InjectedFormProps<DialogsPropsType>> = (props) => {

    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field component={Textarea}
                       validate={[required, maxLength70]}
                       name={"newMessagesText"}
                       placeholder={"Enter your message"}/>
            </div>
            <div>
                <button>Send</button>
            </div>
        </form>
    )
}
export const AddMessageFormRedux = reduxForm<DialogsPropsType>({form: "dialogAddMessageForm"})(AddMessageForm)