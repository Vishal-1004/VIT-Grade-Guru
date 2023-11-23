import React, { useState } from "react";
import styled from "styled-components";
import { toast } from "react-toastify";

const NinePointer = () => {
  const [inputs, setInputs] = useState({
    currGPA: "9",
    currCredits: "",
    CGPA: "",
    prevCredits: "",
  });

  const change = (e) => {
    const { name, value } = e.target;
    setInputs({ ...inputs, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    //console.log(inputs);
    if (
      inputs.CGPA.length === 0 ||
      inputs.prevCredits.length === 0 ||
      inputs.currCredits.length === 0
    ) {
      toast.error("All Input Fields Are Required!", {
        position: "top-center",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored",
      });
    } else {
      const numGPA = Number(inputs.currGPA);
      const numCurCredits = Number(inputs.currCredits);
      const numCGPA = Number(inputs.CGPA);
      const numPrevCredits = Number(inputs.prevCredits);
      //console.log(numGPA, numCurCredits, numCGPA, numPrevCredits);

      if (isNaN(numCGPA) || isNaN(numCurCredits) || isNaN(numPrevCredits)) {
        toast.error("Wrong Input Format!", {
          position: "top-center",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "colored",
        });
      } else {
        if (numCGPA < 1 || numCGPA > 10) {
          toast.error("CGPA Out of Range!", {
            position: "top-center",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "colored",
          });
        } else {
          const numCGPAXnumPrevCred = numCGPA * numPrevCredits;

          const denominator = numCurCredits + numPrevCredits;
          const mulGPAAndDenom = numGPA * denominator;
          const subOfMuGPAAndDenom = mulGPAAndDenom - numCGPAXnumPrevCred;
          const finalReqGPA = subOfMuGPAAndDenom / numCurCredits;

          if (finalReqGPA > 10) {
            toast.warn("No Change of becoming a 9 Pointer this Sem", {
              position: "top-center",
              autoClose: 6000,
              hideProgressBar: false,
              closeOnClick: true,
              pauseOnHover: true,
              draggable: true,
              progress: undefined,
              theme: "colored",
            });
          } else {
            toast.success("GPA Required this Sem: " + finalReqGPA.toFixed(2), {
              position: "top-center",
              autoClose: 6000,
              hideProgressBar: false,
              closeOnClick: true,
              pauseOnHover: true,
              draggable: true,
              progress: undefined,
              theme: "colored",
            });
          }
        }
      }
    }
  };

  return (
    <PointerStyle>
      <form className="cgpa-form">
        <div className="floating-label-group">
          <input
            type="decimal"
            id="current-gpa"
            className="form-control"
            autoComplete="off"
            name="pointer"
            defaultValue={inputs.currGPA}
            autoFocus
            required
          />
          <label className="floating-label">Selected Pointer</label>
        </div>
        <div className="floating-label-group">
          <input
            type="decimal"
            id="current-credits"
            className="form-control"
            autoComplete="off"
            name="currCredits"
            value={inputs.currCredits}
            onChange={change}
            autoFocus
            required
          />
          <label className="floating-label">Current Sem Credits</label>
        </div>
        <div className="floating-label-group">
          <input
            type="decimal"
            id="CGPA-credits"
            className="form-control"
            autoComplete="off"
            name="CGPA"
            value={inputs.CGPA}
            onChange={change}
            autoFocus
            required
          />
          <label className="floating-label">Current CGPA</label>
        </div>
        <div className="floating-label-group">
          <input
            type="decimal"
            id="CGPA"
            className="form-control"
            autoComplete="off"
            name="prevCredits"
            value={inputs.prevCredits}
            onChange={change}
            autoFocus
            required
          />
          <label className="floating-label">
            Credits Finished Before This Sem
          </label>
        </div>
        <button
          type="button"
          className="btn btn-primary"
          onClick={handleSubmit}
        >
          Calculate
        </button>
      </form>
    </PointerStyle>
  );
};

const PointerStyle = styled.section`
  .cgpa-form {
    margin: 5% 30% 5% 30%;
  }

  .floating-label-group {
    position: relative;
    margin-top: 15px;
    margin-bottom: 25px;

    .form-control {
      border: none;
      border-radius: 0;
      border-bottom: 1px solid grey;
      transition: all 0.1s ease;
    }

    .floating-label {
      font-size: 15px;
      color: #cccccc;
      position: absolute;
      pointer-events: none;
      top: 9px;
      left: 12px;
      transition: all 0.1s ease;
    }

    input:focus ~ .floating-label,
    input:not(:focus):valid ~ .floating-label {
      top: -15px;
      bottom: 0px;
      left: 0px;
      font-size: 13px;
      opacity: 1;
      color: #0d6efd;
    }
  }

  @media (max-width: 768px) {
    .cgpa-form {
      margin: 5% 10% 5% 10%;
    }
  }
`;

export default NinePointer;
