import styled from "styled-components";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { AiFillWarning } from "react-icons/ai";

const Contact = () => {
  const schema = yup
    .object({
      name: yup.string().required(),
      email: yup.string().required().email(),
      subject: yup.string(),
      message: yup.string().required(),
    })
    .required();

  const {
    register,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  return (
    <Container id="contact">
      <h2>Contact</h2>
      <h4>Reach Me...</h4>
      <Holder>
        <Left>
          <h3>
            <span>Lagos</span>, Nigeria
          </h3>
          <p>24,Owounndi Street, Amukoko</p>
          <h6>okonkwovincent63@gmail.com</h6>
          <h6>+234 81 3199 4772</h6>
        </Left>
        <Right>
          <Card>
            <InpHold>
              <Holding>
                <input
                  type="text"
                  placeholder="Input name"
                  {...register("name")}
                  style={{ width: "100%" }}
                />
                <p>
                  {errors?.name?.message ? (
                    <AiFillWarning
                      style={{ color: "red", marginRight: "6px" }}
                    />
                  ) : null}
                  {errors?.name?.message}
                  {errors?.name?.message ? "!!!" : null}
                </p>
              </Holding>
              <Holding>
                <input
                  type="text"
                  placeholder="Input email"
                  {...register("email")}
                  style={{ width: "100%" }}
                />
                <p>
                  {errors?.email?.message ? (
                    <AiFillWarning
                      style={{ color: "red", marginRight: "6px" }}
                    />
                  ) : null}
                  {errors?.email?.message}
                  {errors?.email?.message ? "!!!" : null}
                </p>
              </Holding>
            </InpHold>
            <Input
              type="text"
              placeholder="Subject (Optional)"
              {...register("subject")}
            />
            <textarea
              placeholder="Message..."
              {...register("message")}
            ></textarea>
            <Sec>
              <p>
                {errors?.message?.message ? (
                  <AiFillWarning style={{ color: "red", marginRight: "6px" }} />
                ) : null}
                {errors?.message?.message}
                {errors?.message?.message ? "!!!" : null}
              </p>
            </Sec>
            <Buthold>
              <button type="submit">Contact Me</button>
            </Buthold>
          </Card>
        </Right>
      </Holder>
    </Container>
  );
};

export default Contact;

const Sec = styled.div`
  display: flex;
  width: 90%;

  p {
    font-size: 13px;
    color: red;
    display: flex;
    align-items: center;
    margin: 0;
    margin-top: 9px;
  }
`;

const Holding = styled.div`
  width: 46%;
  margin-bottom: 10px;
  margin-right: 20px;

  @media screen and (max-width: 900px) {
    width: 95%;
  }
  input {
    width: 100%;
    height: 38px;
    border: 1px solid #f5f5f5;
    outline: none;
    box-shadow: rgba(60, 64, 67, 0.3) 0px 1px 2px 0px,
      rgba(60, 64, 67, 0.15) 0px 2px 6px 2px;
    padding-left: 7px;
  }

  p {
    font-size: 13px;
    color: red;
    display: flex;
    align-items: center;
    margin: 0;
    margin-top: 10px;
  }
`;

const Buthold = styled.div`
  width: 90%;
  margin-top: 20px;

  button {
    width: 120px;
    height: 45px;
    border-radius: 30px;
    font-size: 16px;
    color: white;
    border: none;
    background-color: #827ae0;
    cursor: pointer;
  }
`;

const Input = styled.input`
  width: 88%;
  height: 38px;
  border: 1px solid #f5f5f5;
  outline: none;
  box-shadow: rgba(60, 64, 67, 0.3) 0px 1px 2px 0px,
    rgba(60, 64, 67, 0.15) 0px 2px 6px 2px;
  padding-left: 10px;
  margin-top: 20px;

  @media screen and (max-width: 900px) {
    width: 95%;
    /* margin-top: 10px; */
    margin: 0;
  }
`;

const InpHold = styled.div`
  width: 90%;
  display: flex;
  justify-content: space-between;
  margin-top: 10px;
  /* background-color: gold; */
  align-items: center;

  @media screen and (max-width: 900px) {
    display: block;
    width: 100%;
  }
`;

const Card = styled.div`
  width: 550px;
  min-height: 200px;
  /* background-color: white; */
  display: flex;
  align-items: center;
  /* justify-content: center; */
  flex-direction: column;

  @media screen and (max-width: 900px) {
    align-items: normal;
    width: 100%;
    margin-top: 40px;
  }

  textarea {
    resize: none;
    width: 88%;
    height: 100px;
    border: 1px solid #f5f5f5;
    outline: none;
    box-shadow: rgba(60, 64, 67, 0.3) 0px 1px 2px 0px,
      rgba(60, 64, 67, 0.15) 0px 2px 6px 2px;
    padding-left: 10px;
    margin-top: 20px;

    @media screen and (max-width: 900px) {
      width: 95%;
      margin-top: 25px;
    }
  }
`;

const Holder = styled.div`
  width: 90%;
  min-height: 200px;
  margin-top: 40px;
  display: flex;
  /* align-items: center; */
  justify-content: space-between;
  /* background-color: gold; */

  @media screen and (max-width: 900px) {
    display: block;
  }

  h3 {
    font-size: 49px;
    margin: 0;
    margin-bottom: 15px;

    span {
      color: #827ae0;
    }
  }
`;

const Right = styled.form``;
const Left = styled.div`
  p {
    margin: 0;
    font-size: 29px;
    margin-bottom: 80px;
  }
  h6 {
    margin: 0;
    margin-bottom: 20px;
    font-size: 27px;
    font-weight: lighter;
  }
`;

const Container = styled.div`
  width: 100%;
  height: 680px;
  display: flex;
  align-items: center;
  /* justify-content: center; */
  flex-direction: column;
  margin-top: 60px;
  position: relative;

  background-color: #f5f5f5;
  margin-bottom: 20px;

  @media screen and (max-width: 900px) {
    height: 980px;
  }

  h2 {
    font-size: 130px;
    color: transparent;
    -webkit-text-stroke: 1px lightgray;
    text-transform: uppercase;
    font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
    margin: 0;
    margin-top: 20px;

    @media screen and (max-width: 900px) {
      font-size: 80px;
    }
  }

  h4 {
    position: absolute;
    top: 13%;
    margin-left: 20px;
    font-size: 39px;
    margin: 0;

    @media screen and (max-width: 900px) {
      top: 6%;
    }
  }
`;
