export const addNewUserFormControls = [
  {
    name: "firstName",
    label: "First Name",
    type: "text",
    placeholder: "Enter your first name",
  },
  {
    name: "lastName",
    label: "Last Name",
    type: "text",
    placeholder: "Enter your last name",
  },
  {
    name: "email",
    label: "Email",
    type: "email",
    placeholder: "youname@email.com",
  },
  {
    name: "address",
    label: "Address",
    type: "text",
    placeholder: "Address",
  },
];

export const addNewUserInitialState = {
  firstName: "",
  lastName: "",
  email: "",
  address: "",
};
