import {
  Router
} from "express";

import {
  createTask,
  getTask,
  listTasks
} from "@parmana/task-registry";

const router =
  Router();

router.post(
  "/tasks",
  (req, res) => {

    const task =
      createTask(
        req.body
      );

    res.status(201)
      .json(task);

  }
);

router.get(
  "/tasks",
  (_req, res) => {

    res.json(
      listTasks()
    );

  }
);

router.get(
  "/tasks/:taskId",
  (req, res) => {

    const task =
      getTask(
        req.params.taskId
      );

    if (!task) {

      return res
        .status(404)
        .json({
          error:
            "Task not found"
        });

    }

    res.json(task);

  }
);

export default router;