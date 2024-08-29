const configFn = {
  postDB: function (postObj) {
    return fetch(import.meta.env.VITE_BACKEND_API_URL + "/post", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        // 'Content-Type': 'application/x-www-form-urlencoded',
      },
      body: JSON.stringify(postObj),
    });
  },

  updateDB: function (document_id, editedObj) {
    return fetch(
      import.meta.env.VITE_BACKEND_API_URL + `/put?id=${document_id}`,
      {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
          // 'Content-Type': 'application/x-www-form-urlencoded',
        },
        body: JSON.stringify(editedObj),
      }
    );
  },

  deleteDB: function (document_id) {
    return fetch(
      import.meta.env.VITE_BACKEND_API_URL + `/delete?id=${document_id}`,
      {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
          // 'Content-Type': 'application/x-www-form-urlencoded',
        },
      }
    );
  },

  getDBid: function (id) {
    return fetch(import.meta.env.VITE_BACKEND_API_URL + `/get?id=${id}`);
  },

  getDBemail: function (email) {
    return fetch(import.meta.env.VITE_BACKEND_API_URL + `/get?email=${email}`);
  },

  getAllDBs: function () {
    return fetch(import.meta.env.VITE_BACKEND_API_URL + "/get");
  },

  getStudents: function () {
    return fetch(import.meta.env.VITE_BACKEND_API_URL + "/getstudents");
  },

  getStudent: function (studentid) {
    return fetch(
      import.meta.env.VITE_BACKEND_API_URL +
        "/getstudents?studentid=" +
        studentid
    );
  },

  postCompany: function (postObj) {
    return fetch(import.meta.env.VITE_BACKEND_API_URL + "/postcomp", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(postObj),
    });
  },

  updateCompany: function (document_id, editedObj) {
    return fetch(
      import.meta.env.VITE_BACKEND_API_URL + `/putcomp?id=${document_id}`,
      {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(editedObj),
      }
    );
  },

  getCompanyBYname: function (name) {
    return fetch(
      import.meta.env.VITE_BACKEND_API_URL + `/getcomp?name=${name}`
    );
  },

  getAllComapnies: function () {
    return fetch(import.meta.env.VITE_BACKEND_API_URL + "/getcomp");
  },

  apply: function (studentid, jobid) {
    return fetch(import.meta.env.VITE_BACKEND_API_URL + "/apply", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        // 'Content-Type': 'application/x-www-form-urlencoded',
      },
      body: JSON.stringify({ jobid, studentid }),
    });
  },

  appliedBYstudent: function (studentid) {
    return fetch(
      import.meta.env.VITE_BACKEND_API_URL +
        `/getapplied?studentid=${studentid}`
    );
  },

  appliedFORadmin: function (jobid) {
    return fetch(
      import.meta.env.VITE_BACKEND_API_URL +
        `/getapplied?jobid=${jobid}&admin=${true}`
    );
  },

  removeApplied: function (jobID, studentid) {
    return fetch(
      import.meta.env.VITE_BACKEND_API_URL +
        `/removeapplied?jobid=${jobID}&studentid=${studentid}`,
      {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
          // 'Content-Type': 'application/x-www-form-urlencoded',
        },
      }
    );
  },

  changestatus: function (jobID, status, studentidArray) {
    console.log(jobID, status, studentidArray);
    return fetch(
      import.meta.env.VITE_BACKEND_API_URL +
        `/changestatus?jobid=${jobID}&status=${status}`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          // 'Content-Type': 'application/x-www-form-urlencoded',
        },
        body: JSON.stringify(studentidArray),
      }
    );
  },

  getQuestions: function (companyname) {
    return fetch(
      import.meta.env.VITE_BACKEND_API_URL +
        `/getquestions?companyname=${companyname}`
    );
  },

  addQuestion: function (postObj) {
    return fetch(import.meta.env.VITE_BACKEND_API_URL + "/addquestion", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(postObj),
    });
  },
};

export default configFn;