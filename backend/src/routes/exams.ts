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
    let exams = [];
    const exam = JSON.parse(JSON.stringify(questions));
    exams.push(exam);
    const foundExam = exams.find((e) => e._id === id);
    ctx.body = foundExam || { message: 'Exam not found' };
    ctx.status = foundExam ? 200 : 404;
});

export default router;