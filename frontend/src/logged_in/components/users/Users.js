import React, { useEffect, Fragment, useState } from "react";
import PropTypes from "prop-types";
import { List, Divider, Paper, withStyles } from "@material-ui/core";
import { Tab, Tabs, Box, Typography } from "@material-ui/core"
import UsersTable from "./UsersTable";
import UsersInfo from "./UsersInfo";
import RoleTable from "./RoleTable";
import { listarOrganizaciones } from "../../../controllers/api/api.organizaciones";


const styles = {
  divider: {
    backgroundColor: "rgba(0, 0, 0, 0.26)"
  }
};

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box p={3}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

function Users(props) {
  const {
 //   listadoOrganizaciones,
    roleList,
    classes,
    openAddUserDialog,
    openAddRoleDialog,
    selectUsers,
    targets,
    setTargets,
    pushMessageToSnackbar,
  } = props;

  const [listadoOrganizaciones, setOrganizaciones] = useState(null);
  useEffect(() => { 

    const getOrganizaciones = async () => {
      const data = await listarOrganizaciones();
      setOrganizaciones(data.response);
    }
    getOrganizaciones();
  }, []);

  const [value, setValue] = React.useState(0);
  const handleChange = (event, newValue) => {
    setValue(newValue);
  }

  return (
    <Fragment>
      <Tabs
        value={value}
        onChange={handleChange}
        indicatorColor="primary"
        textColor="primary"
        centered
      >
        <Tab label="Organizaciones" >
        </Tab>
       {/* <Tab label="Roles" >
        </Tab> */}
      </Tabs>

      <TabPanel value={value} index={0}>
        <Paper>
          <List disablePadding>
            <UsersInfo openAddUserDialog={openAddUserDialog} />
            <Divider className={classes.divider} />
            <UsersTable
              listadoOrganizaciones={listadoOrganizaciones}
              pushMessageToSnackbar={pushMessageToSnackbar}
              targets={targets}
              setTargets={setTargets}
            />
          </List>
        </Paper>
      </TabPanel>
      <TabPanel value={value} index={1}>
        <Paper>
          <List disablePadding>
            <RoleTable roleList={roleList} />
          </List>
        </Paper>
      </TabPanel>

    </Fragment>
  );
}

Users.propTypes = {
  classes: PropTypes.object.isRequired,
  listadoOrganizaciones: PropTypes.arrayOf(PropTypes.object).isRequired,
  roleList: PropTypes.arrayOf(PropTypes.object).isRequired,
 // selectUsers: PropTypes.func.isRequired,
  openAddUserDialog: PropTypes.func.isRequired,
 // openAddRoleDialog: PropTypes.func.isRequired
};

export default withStyles(styles)(Users);
