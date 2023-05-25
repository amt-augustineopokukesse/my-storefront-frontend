import "../../assets/styles/custDashboardStyles/CustProfile.scss";
import profilephoto from "../../assets/images/Ellipse 15.png";
import editLogo from "../../assets/svg/icons8-edit.svg";
import { useEffect, useState } from "react";
import { useFormik } from "formik";
import { AuthLoader } from "../../components/authComponents/AuthLoader";
import { toast } from "react-toastify";
import api from "../../Redux/Authentication/axiosClient";

type user = {
  [key: string]: any;
};

const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;

export const CustProfilePage: React.FC<user> = (props) => {
  const { custUser } = props;
  const [customerExists, setCutomerExists] = useState(custUser);
  const [loader, setLoader] = useState<boolean>(false);
  

  useEffect(() => {
    const customer = localStorage.getItem("customer");
    if (customer) {
      const hasCustomer = JSON.parse(customer);
      setCutomerExists(hasCustomer);
      if (hasCustomer && hasCustomer.email) {
        formik.values.email = hasCustomer.email || "";
        formik.values.contact = hasCustomer?.contact || "";
        formik.values.address = hasCustomer?.address || "";
      }
    }
  }, []);
    
    const [contact, setContact] = useState({ value: "", editmode: true });
    const [address, setAddress] = useState({ value: "", editmode: true });

  const handleAddressChange = () =>
    setAddress({
      value: address.value,
      editmode: address.editmode ? false : true,
    });

  const handleContactChange = () =>
    setContact({
      value: contact.value,
      editmode: contact.editmode ? false : true,
    });

  const formik = useFormik({
    initialValues: { email: "", contact: "", address: "" },
    onSubmit: async (values) => {
      const vals = { ...values };

      try {
        setLoader(true);
        const customerUpdated = await api.put(
          `${API_BASE_URL}/customer/update`,
          vals
        );
        if (customerUpdated) {
          toast.info("You have updated your information!!");
          localStorage.setItem(
            "customer",
            JSON.stringify(customerUpdated.data.data)
          );
          setTimeout(() => {
            setLoader(false);
          }, 300);
        } else throw Error("");
        return;
      } catch (error) {
        setTimeout(() => {
          setLoader(false);
        }, 300);
        toast.warn("could not update information");
      }
    },
  });

  return (
    <div className="profile-details">
      {loader ? <AuthLoader /> : ""}

      <div className="image-name">
        <img className="photo" src={profilephoto} alt="" />
        <h3 className="name">
          {customerExists ? customerExists.first_name : "Merchant"}
        </h3>
      </div>
      <form className="form" onSubmit={formik.handleSubmit}>
        <div className="form-div">
          <label className="profile-label">Email</label>
          <input
            disabled
            type="email"
            name="email"
            value={customerExists?.email}
          />
        </div>
        <div className="form-div">
          <label htmlFor="contact" className="profile-label">
            Phone
          </label>
          <input
            disabled={contact.editmode}
            onChange={formik.handleChange}
            onBlur={handleContactChange}
            type="tel"
            name="contact"
            value={formik.values.contact}
            placeholder="edit your contact..."
            maxLength={12}
            pattern="[0-9]{3}-[0-9]{2}-[0-9]{3}"
          />
          <img
            className="edit-button contact-edit-button"
            src={editLogo}
            alt=""
            onClick={handleContactChange}
          />
        </div>
        <div className="form-div">
          <label className="profile-label">Address</label>
          <input
            disabled={address.editmode}
            onChange={formik.handleChange}
            onBlur={handleAddressChange}
            type="text"
            name="address"
            value={formik.values.address}
            placeholder="edit your address..."
            maxLength={15}
          />
          <img
            className="edit-button location-edit-button"
            src={editLogo}
            alt=""
            onClick={handleAddressChange}
          />
        </div>
        <span className="button-span">
          <button
            disabled={
              !formik.values.contact &&
              !formik.values.email &&
              !formik.values.address
            }
            type="submit"
            className="save-profile-details-button"
          >
            Save
          </button>
        </span>
      </form>
    </div>
  );
};
