
const notFount = (req, res) => {
  const resData = {
    success: false,
    message: "salom bolajonlar"
  }
  res.status(404).json(resData)
}

const errorHandler = (err, req, res, next) => {
  if (res.headersSent) return next(err)
  if (err.name == 'ZodError') {
    return res.status(400).json({ success: false, error: err.issues })
  }
  if (err.code == 'P2025') {
    return res.status(404).json({ success: false, error: 'topilmad' })
  }
  if (err.code == 'P2002') {
    return res.status(409).json({ success: false, error: 'bunday malumot bor ' })
  }
  const status = err.status || 500

  if (status > 500) {
    console.log(err);
    return res.status(status).json({ success: false, error: 'server xatosi' })

  }
}


module.exports = { notFount, errorHandler }
