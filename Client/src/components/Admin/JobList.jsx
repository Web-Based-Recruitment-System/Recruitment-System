import { useEffect, useState } from "react";
import { getJobList } from "../../services/admin";
import "./JobList.css";

function JobList() {
  const [jobList, setJobList] = useState([]);

  useEffect(() => {
    getJobList()
      .then((response) => {
        setJobList(response);
      })
      .catch((error) => {
        console.error("Error fetching Job list:", error);
      });
  }, []);

  return (
    <div className="joblist-page">
      <div className="joblist-card">
        <h2 className="joblist-title">📋 Job Openings</h2>
        <p className="joblist-subtitle">
          Manage and track all active job postings
        </p>

        <div className="table-responsive">
          <table className="table joblist-table">
            <thead>
              <tr>
                <th>ID</th>
                <th>Job Title</th>
                <th>HR Name</th>
                <th>Created On</th>
                <th>Deadline</th>
                <th>Location</th>
                <th>Vacancies</th>
                <th>Status</th>
              </tr>
            </thead>

            <tbody>
              {jobList.length > 0 ? (
                jobList.map((job) => (
                  <tr key={job.jobId}>
                    <td>{job.jobId}</td>
                    <td className="fw-semibold">{job.jobTitle}</td>
                    <td>{job.firstName} {job.lastName}</td>
                    <td>{job.jobCreatedDate}</td>
                    <td>{job.applicationDeadline}</td>
                    <td>{job.location}</td>
                    <td>{job.vacancies}</td>
                    <td>
                      <span
                        className={
                          job.status
                            ? "status-badge active"
                            : "status-badge inactive"
                        }
                      >
                        {job.status ? "Active" : "Inactive"}
                      </span>
                    </td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan="8" className="text-center py-4">
                    No job postings found
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default JobList;
