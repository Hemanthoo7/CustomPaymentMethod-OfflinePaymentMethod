<?php

namespace OfflinePayment\Method\Block\Form;

class Custompayment extends \Magento\OfflinePayments\Block\Form\AbstractInstruction
{
    /**
     * Custom payment template
     *
     * @var string
     */
    protected $_template = 'OfflinePayment_Method::form/custompayment.phtml';
}
