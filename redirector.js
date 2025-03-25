// if we're using randomverseofthe.day, send to rvotd (otherwise, do nothing)
if (location.hostname === 'randomverseofthe.day') location.replace(location.origin + '/rvotd/index.html')