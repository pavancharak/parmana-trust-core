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
  async (req, res) => {

    const task =
      await createTask(
        req.body
      );

    res
      .status(201)
      .json(task);

  }
);

router.get(
  "/tasks",
  async (_req, res) => {

    const tasks =
      await listTasks();

    res.json(
      tasks
    );

  }
);

router.get(
  "/tasks/:taskId",
  async (req, res) => {

    const task =
      await getTask(
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