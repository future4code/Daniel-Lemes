export const goToAplicationPage = (history) => {
    history.push("/aplication");
  };
  export const goToListTripPage = (history) => {
    history.push("/list");
  };
  export const goToLoginPage = (history) => {
    history.push("/login");
  };
  
  export const goToHomePage = (history) => {
    history.push("/");
  };
  
  export const goToTripDetailsPage = (history) => {
    history.push("/details");
  };
  
  export const goToCreateTripPage = (history) => {
    history.push("/create");
  }
  export const goBack = (history) => {
    history.goBack();
  };