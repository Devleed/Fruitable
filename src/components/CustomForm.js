import React from "react";
import { Field, reduxForm } from "redux-form";
import { Form, Button } from "semantic-ui-react";
import { useDispatch, useSelector } from "react-redux";

const renderInput = ({ input, label, type }) => {
  switch (type) {
    case "text":
      return (
        <React.Fragment>
          <label>{label}</label>
          <input {...input} />
        </React.Fragment>
      );
    case "textarea":
      return (
        <React.Fragment>
          <label>{label}</label>
          <textarea {...input}></textarea>
        </React.Fragment>
      );
    case "number":
      return (
        <React.Fragment>
          <label>{label}</label>
          <input type="number" {...input} />
        </React.Fragment>
      );
    default:
      return (
        <React.Fragment>
          <label>{label}</label>
          <input {...input} />
        </React.Fragment>
      );
  }
};

const CustomForm = props => {
  const dispatch = useDispatch();
  const isLoading = useSelector(({ isLoading }) => isLoading);
  const onSubmit = formValues => {
    dispatch({ type: "LOADING", payload: true });
    props.onSubmit(formValues);
  };
  // const renderLoader = () => {
  //   if (props.isDataLoading)
  //     return <div className="ui active centered inline loader"></div>;
  //   else return null;
  // };

  const formProps = {
    onSubmit: props.handleSubmit(onSubmit)
  };
  if (isLoading) formProps.loading = true;

  return (
    <div style={{ marginTop: "20px" }}>
      <Form {...formProps}>
        <Form.Field>
          <Field name="name" component={renderInput} label="Name" type="text" />
        </Form.Field>
        <Form.Field>
          <label>Type</label>
          <Field name="type" component="select">
            <option></option>
            <option value="fruits">fruits</option>
            <option value="vegetables">vegetables</option>
          </Field>
        </Form.Field>
        <Form.Field>
          <Field
            name="price"
            component={renderInput}
            label="Price"
            type="number"
          />
        </Form.Field>
        <Form.Field>
          <Field
            name="description"
            component={renderInput}
            label="Description"
            type="textarea"
          />
        </Form.Field>
        <Form.Field>
          <label>Image</label>
          <input
            onChange={props.onFileSelect}
            type="file"
            style={{ margin: "5px 0px 20px 0px" }}
          />
        </Form.Field>
        <Button>Submit</Button>
      </Form>
    </div>
  );
};

const reduxSetup = reduxForm({
  form: "Add medicine form"
})(CustomForm);

export default reduxSetup;
