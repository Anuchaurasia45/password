// Check Function Start

var check = function() {

    // We use If ,Else For password
    // if password value same = to checkPassword
    if (document.getElementById('password').value ==  document.getElementById('checkPassword').value)
    
    // then run this function
    {
    document.getElementById('alertPassword').style.color = '#8CC63E';
    document.getElementById('alertPassword').innerHTML = '<span><i class="fas fa-check-circle"></i>Match !</span>';
    }
        // OtherWise run this function
    else {
    document.getElementById('alertPassword').style.color = '#EE2B39';
    document.getElementById('alertPassword').innerHTML = '<span><i class="fas fa-exclamation-triangle"></i>not matching</span>';
    }
    }