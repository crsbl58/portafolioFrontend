const request = () => ({
  fetchUrl: async (url:any, setStateHook:any, setStateSpinner:any) => {
    const res = await fetch(`${url}`);
    const data = await res.json();
    setStateSpinner(false);
    setStateHook(data);
    
  },
});

export default request;
