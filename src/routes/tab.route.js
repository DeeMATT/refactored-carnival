import createTabs, { destroyTab, editTab, retrieveTabs } from '../controllers/tab.controllers';

const tabRoutes = (router) => {
  router.use((req, res, next) => {
    res.header(
      'Access-Control-Allow-Headers',
      'x-access-token, Origin, Content-Type, Accept',
    );
    next();
  });

  router.post('/tabs', createTabs);

  router.get('/tabs', retrieveTabs);

  router.put('/tabs/:tabId', editTab);

  router.delete('/tabs/:tabId', destroyTab);
};

export default tabRoutes;
