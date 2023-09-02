import styled from "@emotion/styled";
import Layout from "@/components/layout";

const Ex = ()=>{
  return (
    <>
      <Layout>
      </Layout>
    </>
  );
}

export default Ex;

const Div = styled.div`
  display: flex;
  margin: 0 auto;
  width: 100%;
  height: 100px;
  align-items: center;
  justify-content: center;

  & > p{
    margin: 0 auto;
  }
`;

