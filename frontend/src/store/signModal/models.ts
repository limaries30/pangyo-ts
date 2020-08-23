export enum CurrentView {
    signIn,
    signUp
  }
  
  export interface SignModalState {
    show: boolean;
    currentView: CurrentView;
  }
  