import { Request, Response, Router} from 'express';
import { NextFunction } from 'connect';
import { getBookByID, getBooks } from '../../models/book.model';

const router = Router();

router.get('/:bookID', async (req: Request, res: Response, next: NextFunction): Promise<any> => {

	let book = await getBookByID(req.params["bookID"]);
	if (book == null){
		res.status(404);
		res.send('Not Found');
	} else {
		res.send(book);
	}

	next();
});

router.get('/', async (req: Request, res: Response, next: NextFunction): Promise<any> => {
	console.log(req.params, res.status, next.name);	

	let books = await getBooks();
	res.send(books);

	next();
});

export const BooksController = router;
