export interface IHomeState {
    home: IHomeData
}

export interface IRegState {
  regional: IRegData
}

export interface IHomeData {
  natProjects: INatProject[] | [],
  news: any,
  loading: boolean,
  error: any
}

export interface IRegData {
  project: INatProject | [],
  loading: boolean,
  error: any
}

export interface INatProject {
  natProjectsName: string,
  natProjectsDes: INatDes,
  natProjectsUrl: string,
  regPrjcts: IRegPrjct[]
}

interface INatDes {
  time: string,
  budget: string,
  par: string
}

export interface IRegPrjct {
    Name_Project: string,
    Director: string,
    Admin: string,
    Curator: string,
    Target: string,
    Deadlines: string,
    tables1: any,
    tables: any,
    Director_img: string,
    Curator_img: string,
    Admin_img: string,
    url_protocol: string
}