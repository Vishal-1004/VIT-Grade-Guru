import React, { useState } from "react";
import { MDBTable, MDBTableHead, MDBTableBody } from "mdb-react-ui-kit";
import styled from "styled-components";
import { toast } from "react-toastify";

const gradePoints = {
  S: 10,
  A: 9,
  B: 8,
  C: 7,
  D: 6,
  E: 5,
  F: 0,
};

export default function App() {
  const [inputs, setInputs] = useState({
    credit1: "",
    grade1: "",
    credit2: "",
    grade2: "",
    credit3: "",
    grade3: "",
    credit4: "",
    grade4: "",
    credit5: "",
    grade5: "",
    credit6: "",
    grade6: "",
    credit7: "",
    grade7: "",
    credit8: "",
    grade8: "",
    credit9: "",
    grade9: "",
    credit10: "",
    grade10: "",
  });

  const change = (e) => {
    const { name, value } = e.target;
    // Capitalize the first letter of the input
    const capitalizedValue = value.charAt(0).toUpperCase() + value.slice(1);

    // Update the state with the modified value
    setInputs({ ...inputs, [name]: capitalizedValue }); // Convert to uppercase
  };

  const handleSubmit = () => {
    let totalPoints = 0;
    let totalCredits = 0;
    let displayTotalPoints = true;
    // Iterate over keys in inputs object
    Object.keys(inputs).forEach((key) => {
      // Check if the key is a credit field (even index) and not empty
      if (key.includes("credit") && inputs[key] !== "") {
        // Get the corresponding grade key
        const gradeKey = key.replace("credit", "grade");

        // Check if the grade is not in ['S', 'A', 'B', 'C', 'D', 'E', 'F']
        if (!["S", "A", "B", "C", "D", "E", "F"].includes(inputs[gradeKey])) {
          toast.warn("Grades must be in S, A, B, C, D, E, or F", {
            position: "top-center",
            autoClose: 6000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "colored",
          });
          displayTotalPoints = false;
          return; // Stop further execution
        }

        // Calculate points based on grade
        const points = gradePoints[inputs[gradeKey]];

        // Calculate total points by multiplying points with credits
        totalCredits += Number(inputs[key]);
        totalPoints += Number(inputs[key]) * points;
      }
    });

    // Display the total points
    if (displayTotalPoints) {
      const gpa = totalPoints / totalCredits;
      if (isNaN(gpa)) {
        toast.info("Plese enter something before calculating GPA", {
          position: "top-center",
          autoClose: 6000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "colored",
        });
        return;
      }
      toast.success("Your GPA is: " + gpa.toFixed(2), {
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
  };

  return (
    <GPAStyle>
      <div className="gpa-form">
        <MDBTable borderless>
          <MDBTableHead>
            <tr>
              <th scope="col" className="text-center table-heading">
                Credits
              </th>
              <th scope="col" className="text-center table-heading">
                Grade
              </th>
            </tr>
          </MDBTableHead>
          <MDBTableBody>
            {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((index) => (
              <tr key={index}>
                <td>
                  <div className="floating-label-group">
                    <input
                      type="decimal"
                      id={`credit${index}`}
                      className="form-control"
                      autoComplete="off"
                      name={`credit${index}`}
                      onChange={change}
                      required
                    />
                    <label className="floating-label">Enter Credit</label>
                  </div>
                </td>
                <td>
                  <div className="floating-label-group">
                    <input
                      type="text"
                      id={`grade${index}`}
                      className="form-control"
                      autoComplete="off"
                      name={`grade${index}`}
                      value={inputs[`grade${index}`]}
                      onChange={change}
                      required
                    />
                    <label className="floating-label">Enter Grade</label>
                  </div>
                </td>
              </tr>
            ))}
          </MDBTableBody>
        </MDBTable>
      </div>
      <button
        type="button"
        className="btn btn-primary d-flex"
        onClick={handleSubmit}
      >
        Calculate
      </button>
    </GPAStyle>
  );
}

const GPAStyle = styled.section`
  .table-heading {
    font-size: 1.25rem;
    font-weight: 500;
  }
  .btn {
    margin: 5% auto !important;
  }

  .gpa-form {
    margin: 5% 15% 5% 15%;
  }

  .floating-label-group {
    align-item: center;
    width: 50%;
    margin: 0 auto;
    position: relative;

    .form-control {
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
    .gpa-form {
      margin: 5% 0% 5% 0%;
    }

    .floating-label-group {
      width: 70%;
    }
  }
`;
