import React, { Fragment, useState } from "react";
import CartItem from "./CartItem";
import {
  Box,
  Button,
  Card,
  Divider,
  Grid,
  Modal,
  TextField,
} from "@mui/material";
import AddressCard from "./AddressCard";
import AddLocationAltIcon from "@mui/icons-material/AddLocationAlt";
import { ErrorMessage, Formik } from "formik";
import * as Yup from "yup";
import { Form, Field } from "formik";
const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};
const initialValues = {
  streetAddress: "",
  state: "",
  pinCode: "",
  city: "",
};
const validationSchema = Yup.object().shape({
  streetAddress: Yup.string().required("Street Address is Required"),
  state: Yup.string().required("State Address is Required"),
  pinCode: Yup.string().required("PinCode is Required"),
  city: Yup.string().required("City is Required"),
});
const Cart = () => {
  const cartItem = [1, 1, 1, 1, 1];
  const addressItem = [1, 1, 1, 1, 1, 1, 1];
  const [openAddressModal, SetopenAddressModal] = useState(false);
  const handleCloseAddressModal = () => {
    SetopenAddressModal(false);
  };
  const handleOpenAddressModal = () => {
    SetopenAddressModal(true);
  };
  const handleSubmit = () => {};
  return (
    <Fragment>
      <main className="lg:flex justify-between">
        <section className="lg:w-[30%] space-y-6 min-h-screen pt-10">
          <div className="space-y-6">
            {cartItem.map((item) => (
              <CartItem />
            ))}
          </div>
          <Divider />
          <div className="billDetails px-5 text-sm">
            <p className="font-extralight py-5">Bill Details</p>
            <div className="space-y-3">
              <div className="flex justify-between text-gray-400">
                <p>Item Total</p>
                <p>$345</p>
              </div>
              <div className="flex justify-between text-gray-400">
                <p>Delivery Fee</p>
                <p>$9</p>
              </div>
              <div className="flex justify-between text-gray-400">
                <p>Platform fee</p>
                <p>$5</p>
              </div>
              <div className="flex justify-between text-gray-400">
                <p>GST and Restrauant Charges</p>
                <p>$3</p>
              </div>
              <Divider />
              <div className="flex justify-between text-gray-400">
                <p>Total Pay</p>
                <p>$362</p>
              </div>
            </div>
          </div>
        </section>
        <Divider orientation="vertical" flexItem />
        <section className="lg:w-[90%] px-5">
          <h1 className="text-center font-semibold text-2xl py-10">
            Choose Delivery Address
          </h1>
          <div className="flex flex-wrap">
            {addressItem.map((item) => (
              <AddressCard />
            ))}
            <Card className="flex space-x-5 lg:w-64 m-5 p-5">
              <AddLocationAltIcon />
              <div className="space-y-3 text-gray-500">
                <p>Add New Adddress</p>
                <Button
                  onClick={handleOpenAddressModal}
                  sx={{ padding: ".75rem" }}
                  fullWidth
                  variant="contained"
                >
                  Add
                </Button>
              </div>
            </Card>
          </div>
        </section>
      </main>
      <Modal open={openAddressModal} onClose={handleCloseAddressModal}>
        <Box sx={style}>
          <Formik
            initialValues={initialValues}
            validationSchema={validationSchema}
            onSubmit={handleSubmit}
          >
            <Form>
              <Grid container spacing={2}>
                <Grid item xs={12}>
                  <Field
                    label="Street Address"
                    fullWidth
                    variant="outlined"
                    error={!ErrorMessage("streetAddress")}
                    name="Street Address"
                    as={TextField}
                    helperText={
                      <ErrorMessage name="streetAddress">
                        {(msg) => <span className="text-red-600">{msg}</span>}
                      </ErrorMessage>
                    }
                  />
                </Grid>

                <Grid item xs={6}>
                  <Field
                    label="State"
                    fullWidth
                    variant="outlined"
                    error={!ErrorMessage("state")}
                    name="State"
                    as={TextField}
                    helperText={
                      <ErrorMessage name="state">
                        {(msg) => <span className="text-red-600">{msg}</span>}
                      </ErrorMessage>
                    }
                  />
                </Grid>
                <Grid item xs={6}>
                  <Field
                    label="City"
                    fullWidth
                    variant="outlined"
                    error={!ErrorMessage("city")}
                    name="City"
                    as={TextField}
                    helperText={
                      <ErrorMessage name="city">
                        {(msg) => <span className="text-red-600">{msg}</span>}
                      </ErrorMessage>
                    }
                  />
                </Grid>

                <Grid item xs={12}>
                  <Field
                    label="Pin Code"
                    fullWidth
                    variant="outlined"
                    error={!ErrorMessage("pinCode")}
                    name="Pin Code"
                    as={TextField}
                    helperText={
                      <ErrorMessage name="pinCode">
                        {(msg) => <span className="text-red-600">{msg}</span>}
                      </ErrorMessage>
                    }
                  />
                </Grid>
                <Grid className="p-5" xs={12}>
                  <Button fullWidth variant="contained">
                    Delivery Here
                  </Button>
                </Grid>
              </Grid>
            </Form>
          </Formik>
        </Box>
      </Modal>
    </Fragment>
  );
};

export default Cart;
