declare module '*.svg?inline' {
  const content: any;
  export default content;
}

declare module '*.svg' {
  const content: any;
  export default content;
}

declare module '*.jpg' {
  const content: any;
  export default content;
}

declare module '*.png' {
  const content: any;
  export default content;
}

interface AuthContextType {
  user: any;
  signin: (user: string, callback: VoidFunction) => void;
  signout: (callback: VoidFunction) => void;
}
