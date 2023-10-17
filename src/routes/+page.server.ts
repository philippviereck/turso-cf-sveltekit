import { db, tmp } from '$lib/turso';

export const load = async () => {
	return { tmp: await db.select().from(tmp) };
};
