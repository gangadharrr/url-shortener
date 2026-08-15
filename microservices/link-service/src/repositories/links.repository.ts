import {  Transaction, LinksInsert, linksTable, db } from "url-shortener-shared";

export class LinksRepository {
  static async createLink(shortCode: string, originalUrl: string, options?: { tx: Transaction }): Promise<LinksInsert> {
    const { tx } = options || {};
    const queryClient = tx || db;
    const result = await queryClient.insert(linksTable)
    return { shortCode, originalUrl };

  }
}