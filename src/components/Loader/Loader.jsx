import { ThreeCircles } from 'react-loader-spinner';

export default function Loader() {
  return (
    <>
      <div style={{
        display: 'flex',
        justifyContent: 'center',
        margin: '12px 0',
      }}>
          <ThreeCircles
              visible={true}
              height="100"
              width="100"
              color="#4fa94d"
              ariaLabel="three-circles-loading"
              wrapperStyle={{}}
              wrapperClass=""
          />
      </div>
    </>
  );
};