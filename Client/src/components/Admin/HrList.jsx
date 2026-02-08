import { useEffect, useState } from "react";
import { getHrList, deactivateHr } from "../../services/admin";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function HrList() {
  const [hrList, setHrList] = useState([]);

  useEffect(() => {
    getHrList()
      .then((response) => setHrList(response))
      .catch((error) => {
        console.error("Error fetching HR list:", error);
        toast.error("Failed to load HR list");
      });
  }, []);

  const deactivateHrAccount = (id) => {
    deactivateHr(id)
      .then(() => {
        toast.success(`HR account deactivated: ${id}`);
        setHrList((prev) =>
          prev.map((hr) =>
            hr.id === id ? { ...hr, status: false } : hr
          )
        );
      })
      .catch(() => {
        toast.error(`Failed to deactivate HR account: ${id}`);
      });
  };

  return (
    <div className="container py-4">
      <h2 className="fw-bold mb-4 text-primary">👥 HR Management</h2>

      <div className="row g-4">
        {hrList.map((hr) => (
          <div className="col-md-6 col-lg-4" key={hr.id}>
            <div className="card shadow-sm border-0 h-100">
              <div className="card-body">
                <h5 className="card-title fw-bold">
                  {hr.firstName} {hr.lastName}
                </h5>
                <p className="card-text text-muted mb-1">
                  📧 {hr.email}
                </p>
                <p className="card-text text-muted mb-1">
                  📞 {hr.phoneNumber}
                </p>
                <p className="card-text text-muted mb-1">
                  🎓 {hr.qualification}
                </p>
                <p className="card-text">
                  Gender: <span className="fw-semibold">{hr.gender}</span>
                </p>

                <span
                  className={`badge ${
                    hr.status ? "bg-success" : "bg-secondary"
                  } mb-3`}
                >
                  {hr.status ? "Active" : "Inactive"}
                </span>

                {hr.status ? (
                  <button
                    className="btn btn-outline-danger w-100 fw-bold"
                    onClick={() => deactivateHrAccount(hr.id)}
                  >
                    🚫 Deactivate
                  </button>
                ) : (
                  <button className="btn btn-secondary w-100 fw-bold" disabled>
                    ❌ Deactivated
                  </button>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>

      <ToastContainer position="bottom-right" />
    </div>
  );
}

export default HrList;
