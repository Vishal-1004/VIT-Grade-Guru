import React from "react";
import styled from "styled-components";
import { TbSum } from "react-icons/tb";

const Formula = () => {
  return (
    <FormulaStyle>
      <div className="container">
        <h1 className="my-3 main-heading">Formula To Calculate GPA</h1>
        <p>
          GPA, or Grade Point Average, is a crucial indicator of academic
          performance. It is computed by determining the average of the grade
          points earned across various courses. Below is a table illustrating
          the grade point relations at Vellore Institute of Technology (VIT),
          providing insight into how grades translate into points. Understanding
          this grading system is essential for students to gauge their academic
          standing effectively.
        </p>

        <table className="table table-bordered border-primary my-4">
          <thead>
            <tr className="table-primary text-center border-primary ">
              <th scope="col" className="table-dark">
                Grade
              </th>
              <th scope="col">S</th>
              <th scope="col">A</th>
              <th scope="col">B</th>
              <th scope="col">C</th>
              <th scope="col">D</th>
              <th scope="col">E</th>
              <th scope="col">F</th>
              <th scope="col">N</th>
            </tr>
          </thead>
          <tbody>
            <tr className="text-center">
              <th scope="row" className="table-dark">
                Point
              </th>
              <td>10</td>
              <td>9</td>
              <td>8</td>
              <td>7</td>
              <td>6</td>
              <td>5</td>
              <td>0</td>
              <td>0</td>
            </tr>
          </tbody>
        </table>

        <p>
          Based on this Grade-Point reation the formula for Calculating GPA is
          given by:
        </p>
        <p className="text-center">
          GPA = <TbSum /> ( Credit
          <span className="text-muted">(each subject)</span> <strong>X</strong>
          &nbsp;Points
          <span className="text-muted">
            (for a grade of that subject)
          </span> ) <strong>/</strong>
          <TbSum />
          Credits
        </p>
        <p className="margin">Let's try to understand this with an example:</p>
        <table className="table table-bordered my-4">
          <thead>
            <tr className="text-center table-dark">
              <th scope="col">
                Credits <br /> C<sub>i</sub>
              </th>
              <th scope="col">
                Grades <br /> G<sub>i</sub>
              </th>
              <th scope="col">
                Points <br /> P<sub>i</sub>
              </th>
              <th scope="col">
                C<sub>i</sub> X P<sub>i</sub>
              </th>
            </tr>
          </thead>
          <tbody>
            <tr className="text-center">
              <td>3</td>
              <td>A</td>
              <td>9</td>
              <td>27</td>
            </tr>
            <tr className="text-center">
              <td>1</td>
              <td>S</td>
              <td>10</td>
              <td>10</td>
            </tr>
            <tr className="text-center">
              <td>3</td>
              <td>S</td>
              <td>10</td>
              <td>30</td>
            </tr>
            <tr className="text-center">
              <td>1</td>
              <td>S</td>
              <td>10</td>
              <td>10</td>
            </tr>
            <tr className="text-center">
              <td>3</td>
              <td>A</td>
              <td>9</td>
              <td>27</td>
            </tr>
            <tr className="text-center">
              <td>1</td>
              <td>S</td>
              <td>10</td>
              <td>10</td>
            </tr>
            <tr className="text-center">
              <td>2</td>
              <td>A</td>
              <td>9</td>
              <td>18</td>
            </tr>
            <tr className="text-center">
              <td>4</td>
              <td>B</td>
              <td>8</td>
              <td>32</td>
            </tr>
            <tr className="text-center">
              <td>1.5</td>
              <td>S</td>
              <td>10</td>
              <td>15</td>
            </tr>
          </tbody>
        </table>
        <p>
          Here <TbSum />
          (C<sub>i</sub> X P<sub>i</sub>) = 179 and <TbSum /> C<sub>i</sub> =
          19.5, <br />
          Now on dividing these two we get 179<strong>/</strong>19.5 = 9.179
          <br /> Which can be rounded off to <strong>9.18 GPA</strong>
        </p>
        <p>This is how GPA is calculated.</p>
      </div>
    </FormulaStyle>
  );
};

const FormulaStyle = styled.section`
  p {
    font-size: 1.1rem;
    letter-spacing: 0.9px;
    line-height: 1.5rem;
  }

  .main-heading {
    display: inline-block;
    margin-top: 2rem !important;
    font-size: 2rem;
    font-weight: 400 !important;
    border-bottom: 3px solid #0d6efd;
  }

  .margin {
    margin: 2rem 0 1rem 0;
  }

  @media (max-width: 768px) {
    p {
      font-size: 0.9rem;
      line-height: 1.35rem;
    }

    .main-heading {
      display: inline-block;
      margin-top: 1.5rem !important;
      font-size: 1.5rem;
      font-weight: 400 !important;
      border-bottom: 3px solid #0d6efd;
    }
  }
`;

export default Formula;
