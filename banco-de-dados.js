import { sql } from './db.js'

export class DatabaseUsers {
    async createUser(user) {
        const id = randomUUID();
        const name = user.name;
        const senha = user.senha;
        const perfil = user.perfil;

        await sql`insert into users (id, name, password, profile)
        values (${id}, ${name}, ${senha}, ${perfil})`
    }
}