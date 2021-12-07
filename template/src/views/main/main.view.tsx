import React, { FC, useEffect } from "react";
import { connect } from "react-redux";
import { IAppState } from "db/reducers";
import { mainActions } from "./db/action";
import { IMainPage } from "./types";
import "./Main.css";
import reactLogo from "assets/reactlogoblack.png";
import nprLogo from "assets/nprlogo.png";

const Main: FC<IMainPage> = ({ mainState, getText }) => {
  useEffect(() => {
    getText("hello");
  }, [getText]);

  return (
    <div className="container">
      <div className="logo-container">
        <img draggable="false" src={reactLogo} />
        <img draggable="false" src={nprLogo} />
        <div>( New pattern of react ) </div>
        <div> Hello from api </div>
        <div>
          this is a new react pattern with best practise folder structure, ready redux state and saga middleware and a
          few helper functions. we prepare "main" view and a few elements ( route, api ) for starting. modify them and
          start to create miracles!
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = (state: IAppState) => ({ mainState: state.main });
export default connect(mapStateToProps, mainActions)(Main);
