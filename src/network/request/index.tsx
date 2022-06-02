const request = () => ({
  fetchUrl: async (url:any, setStateHook:any) => {
    const res = await fetch(`${url}`);
    const data = await res.json();
    setStateHook(data);
  },
});

export default request;
