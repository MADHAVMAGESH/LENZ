class QuestionPaper {
    constructor(id, userId, fileName, filePath, uploadedAt, questions = [], keyNotes = []) {
        this.id = id;
        this.userId = userId;
        this.fileName = fileName;
        this.filePath = filePath;
        this.uploadedAt = uploadedAt;
        this.questions = questions;
        this.keyNotes = keyNotes;
    }
}

module.exports = QuestionPaper;