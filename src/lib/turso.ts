import { int, sqliteTable } from 'drizzle-orm/sqlite-core';
import { drizzle } from 'drizzle-orm/libsql';
import { createClient } from '@libsql/client/web';

export const client = createClient({
	url: 'libsql://insert-url.turso.io',
	authToken: 'xxxxxxxxxxxxxx'
});

export const db = drizzle(client);

export const tmp = sqliteTable('tmp', {
	id: int('id')
		.primaryKey({
			autoIncrement: true
		})
		.notNull()
});
