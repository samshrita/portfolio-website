import { useState } from "react";
import { useForm } from "react-hook-form";
import emailjs from "@emailjs/browser";
import styled from "styled-components";
import { AiOutlineArrowRight } from "react-icons/ai";

const CardDiv = styled.div`
  background-color: #c4c1e0;
  border-radius: 1.7rem;
  box-shadow: 0 0 10px rgba(85, 60, 154, 0.28);
  display: flex;
  height: auto;
  flex-direction: column;
  padding: 2rem 2rem;
  width: 100%;
  color: var(--text);
`;
const H1 = styled.h1`
  font-size: 2.2rem;
  font-weight: 500;
  font-family: "Space Grotesk", sans-serif;
  color: var(--purple);
`;

const Button = styled.button`
  background: linear-gradient(to bottom right, var(--purple), var(--accent));
  border: 0;
  border-radius: 24px;
  color: var(--btntext);
  cursor: pointer;
  display: flex;
  align-items: center;
  gap: 0.4rem;
  font-family: "Space Grotesk", sans-serif;
  font-size: 16px;
  font-weight: 500;
  line-height: 2.5;
  outline: transparent;
  padding: 0 1.2rem;
  text-align: center;
  text-decoration: none;
  transition: box-shadow 0.2s ease-in-out;
  user-select: none;
  -webkit-user-select: none;
  touch-action: manipulation;
  white-space: nowrap;
  margin: 1rem 0rem;

  &:not([disabled]):focus {
    box-shadow:
      0 0 0.25rem rgba(0, 0, 0, 0.5),
      -0.125rem -0.125rem 1rem rgba(85, 60, 154, 0.25),
      0.125rem 0.125rem 1rem rgba(238, 75, 43, 0.25);
  }

  &:not([disabled]):hover {
    box-shadow:
      0 0 0.25rem rgba(0, 0, 0, 0.5),
      -0.125rem -0.125rem 1rem rgba(85, 60, 154, 0.25),
      0.125rem 0.125rem 1rem rgba(238, 75, 43, 0.25);
  }
  &:disabled {
    opacity: 0.8;
  }
`;

const Form = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();
  const [disabled, setDisabled] = useState(false);
  const [alertInfo, setAlertInfo] = useState({
    display: false,
    message: "",
    type: "",
  });

  // Shows alert message for form submission feedback
  const toggleAlert = (message, type) => {
    setAlertInfo({ display: true, message, type });

    // Hide alert after 5 seconds
    setTimeout(() => {
      setAlertInfo({ display: false, message: "", type: "" });
    }, 8000);
  };

  // Function called on submit that uses emailjs to send email of valid contact form
  const onSubmit = async (data) => {
    // Destrcture data object
    const { name, email, subject, message } = data;
    try {
      // Disable form while processing submission
      setDisabled(true);

      // Define template params
      const templateParams = {
        name,
        email,
        subject,
        message,
      };

      // Use emailjs to email contact form data
      await emailjs.send(
        import.meta.env.VITE_SERVICE_ID,
        import.meta.env.VITE_TEMPLATE_ID,
        templateParams,
        import.meta.env.VITE_PUBLIC_KEY,
      );

      // Display success alert
      toggleAlert("Form Submission Successful. Thank You!", "success");
    } catch (e) {
      console.error(e);
      // Display error alert
      toggleAlert("Form Submission Failed, Please Try Again!", "danger");
    } finally {
      // Re-enable form submission
      setDisabled(false);
      // Reset contact form fields after submission
      reset();
    }
  };

  return (
    <CardDiv>
      <H1>Shoot Me An Email</H1>
      <form id="contact-form" onSubmit={handleSubmit(onSubmit)} noValidate>
        {/* Row 1 of form */}

        <div className="flex flex-col py-4 gap-2 ">
          <input
            type="text"
            name="name"
            style={{ border: "1px solid #999", borderRadius: "10px" }}
            {...register("name", {
              required: {
                value: true,
                message: "Please enter your name",
              },
              maxLength: {
                value: 30,
                message: "Please use 30 characters or less",
              },
            })}
            className="form-control py-3 px-2 "
            placeholder="Name"
          ></input>
          {errors.name && (
            <span className="text-[14px] m-0 p-0 text-[#f45532]">
              {errors.name.message}
            </span>
          )}
        </div>

        <div className="flex flex-col py-4 gap-2">
          <input
            type="email"
            name="email"
            style={{ border: "1px solid #999", borderRadius: "10px" }}
            {...register("email", {
              required: true,
              pattern:
                /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/,
            })}
            className="form-control py-3 px-2"
            placeholder="Email address"
          ></input>
          {errors.email && (
            <span className="text-[14px] m-0 p-0 text-[#f45532]">
              Please enter a valid email address
            </span>
          )}
        </div>

        {/* Row 2 of form */}

        <div className="flex flex-col py-4 gap-2">
          <input
            type="text"
            name="subject"
            style={{ border: "1px solid #999", borderRadius: "10px" }}
            {...register("subject", {
              required: {
                value: true,
                message: "Please enter a subject",
              },
              maxLength: {
                value: 75,
                message: "Subject cannot exceed 75 characters",
              },
            })}
            className="form-control py-3 px-2"
            placeholder="Subject"
          ></input>
          {errors.subject && (
            <span className="text-[14px] m-0 p-0 text-[#f45532]">
              {errors.subject.message}
            </span>
          )}
        </div>

        {/* Row 3 of form */}

        <div className="flex flex-col py-4 gap-2">
          <textarea
            rows={3}
            name="message"
            style={{ border: "1px solid #999", borderRadius: "10px" }}
            {...register("message", {
              required: true,
            })}
            className="form-control py-3 px-2"
            placeholder="Message"
          ></textarea>
          {errors.message && (
            <span className="text-[14px] m-0 p-0 text-[#f45532]">
              Please enter a message
            </span>
          )}
        </div>
        <div className="flex justify-center lg:justify-start">
          <Button disabled={disabled} type="submit">
            {disabled ? "Submitting ..." : "Submit"} <AiOutlineArrowRight />
          </Button>
        </div>
      </form>

      {alertInfo.display && (
        <div
          className={
            alertInfo.type === "success"
              ? "text-[#28a745] text-[16px] flex gap-2 items-center font-spaceGrotesk "
              : "text-[#dc3545] text-[16px] flex gap-2 items-center font-spaceGrotesk "
          }
        >
          {alertInfo.message}
        </div>
      )}
    </CardDiv>
  );
};

export default Form;
