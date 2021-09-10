import React, { lazy, Suspense } from "react";
import { Redirect, Route, Switch } from "react-router-dom";
import Loading from "components/shared-components/Loading";

import UserEdit from "./UserEdit";
import EditProfile from "./UserEdit";

const AddUsers = ({ match }) => (
  <div>
    <Switch>
      {/* <Redirect exact from={`${match.url}`} to={`${match.url}/list`} /> */}
      <Route path={`${match.url}`} component={EditProfile} />
     
    </Switch>
  </div>
);

export default AddUsers;
