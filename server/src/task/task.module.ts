import { Module } from "@nestjs/common";
import { TaskModuleBase } from "./base/task.module.base";
import { TaskService } from "./task.service";
import { TaskController } from "./task.controller";

@Module({
  imports: [TaskModuleBase],
  controllers: [TaskController],
  providers: [TaskService],
  exports: [TaskService],
})
export class TaskModule {}
