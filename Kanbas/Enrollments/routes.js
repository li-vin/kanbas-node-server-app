import * as enrollmentsDao from "./dao.js";
export default function EnrollmentsRoutes(app) {
    app.get("/api/enrollments", (req, res) => {
        res.json(enrollmentsDao.findAllEnrollments());
    });
}
