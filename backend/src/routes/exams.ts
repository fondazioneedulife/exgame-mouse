import Router from '@koa/router';
import {questions} from '../mocks/questions';

const router = new Router({
    prefix: '/api/exams',
});

router.get('/', async (ctx) => {
    const exams = { questions };
    ctx.body = exams;
    ctx.status = 200;
});

router.get('/:id', async (ctx) => {
    const id = ctx.params.id;
    const exams = questions;
    const foundExam = exams.find((e) => e._id === id);
    ctx.body = foundExam || { message: 'Exam not found' };
    ctx.status = foundExam ? 200 : 404;
});

router.post('/', async (ctx) => {
    const newExam = {
        _id: "exam_003",
        name: "Quiz Generale",
        schedule_date: "2024-01-15",
        max_time: 1800,
    }
    ctx.body = "Esame Creato";
    ctx.status = 200;
});

export default router;