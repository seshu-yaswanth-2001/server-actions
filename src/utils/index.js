export const addNewuserFormControls = [
  {
    name: "firstName",
    label: "First Name",
    placeholder: "Enter your first name",
    type: "text",
  },
  {
    name: "lastName",
    label: "Last Name",
    placeholder: "Enter your last name",
    type: "text",
  },
  {
    name: "email",
    label: "Email",
    placeholder: "yourname@gmail.com",
    type: "email",
  },
  {
    name: "address",
    label: "Address",
    placeholder: "Address",
    type: "text",
  },
];

export const addNewUserInitialState = {
  firstName: "",
  lastName: "",
  placeholder: "",
  type: "",
};
