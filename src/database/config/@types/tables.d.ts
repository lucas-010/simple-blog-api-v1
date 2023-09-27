import Article from "../../../models/Article";
import Category from "../../../models/Category";
import Comment from "../../../models/Comment";
import Role from "../../../models/Role";
import User from "../../../models/User";

declare module "knex/types/tables" {
	interface Tables {
		user: User;
		role: Role;
		article: Article;
		category: Category;
		comment: Comment;
	}
}
