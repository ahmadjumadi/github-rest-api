import React, {createContext, useState, useContext} from "react";

const GithubContext = createContext();

const GithubProvider = ({children}) => {
  const [repositories, setRepositories] = useState([]);

  return (
    <GithubContext.Provider value={
      {repositories, setRepositories}
    }>
      {/* // HOC / nge slot  */}
      {children}
    </GithubContext.Provider>
  )
}
// custom hooks
const useGithub = () => {
  const context = useContext(GithubContext);
  // apakah context bisa jadi undifined (kalo ndifiend context dipakai diluar component)

  if (context === undefined)
  {
    throw new Error("Tidak boleh hanya bisa dalam provider");
  }
  return context;

};

export {GithubProvider, useGithub};